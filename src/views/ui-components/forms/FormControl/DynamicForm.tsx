import { FormItem, Form } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { HiMinus } from 'react-icons/hi'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'

type FormSchema = {
    users: {
        name: string
        email: string
    }[]
    groupName: string
}

const validationSchema: ZodType<FormSchema> = z.object({
    groupName: z.string().min(1, 'نام گروه الزامی است'),
    users: z.array(
        z.object({
            name: z.string().min(1, 'نام الزامی است'),
            email: z
                .string()
                .min(1, 'ایمیل الزامی است')
                .email('ایمیل معتبر وارد کنید'),
        }),
    ),
})

const DynamicForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            users: [
                {
                    name: 'Leslie James',
                    email: 'leslie.james@themenate.com',
                },
                {
                    name: 'Kelly Lambert',
                    email: 'kelly.lambert@themenate.com',
                },
            ],
            groupName: '',
        },
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = (values: FormSchema) => {
        alert(JSON.stringify(values, null, 2))
    }

    const { fields, append, remove } = useFieldArray({
        name: 'users',
        control,
    })

    return (
        <Form layout="inline" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div className="mb-10">
                <h5 className="mb-4">لیست کاربران</h5>
                <FormItem
                    layout="vertical"
                    label="گروه"
                    invalid={Boolean(errors.groupName)}
                    errorMessage={errors.groupName?.message}
                >
                    <Controller
                        name="groupName"
                        control={control}
                        render={({ field }) => (
                            <Input placeholder="نام گروه" {...field} />
                        )}
                    />
                </FormItem>
            </div>
            {fields.map((userField, index) => (
                <div key={userField.id}>
                    <FormItem
                        label="نام کاربر"
                        invalid={Boolean(errors.users?.[index]?.name?.message)}
                        errorMessage={errors.users?.[index]?.name?.message}
                    >
                        <Controller
                            name={`users.${index}.name`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    autoComplete="off"
                                    placeholder="نام"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    <FormItem
                        label="ایمیل"
                        invalid={Boolean(errors.users?.[index]?.email?.message)}
                        errorMessage={errors.users?.[index]?.email?.message}
                    >
                        <Controller
                            name={`users.${index}.email`}
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    placeholder="ایمیل"
                                    {...field}
                                />
                            )}
                        />
                    </FormItem>
                    <Button
                        type="button"
                        shape="circle"
                        size="sm"
                        icon={<HiMinus />}
                        onClick={() => remove(index)}
                    />
                </div>
            ))}
            <div className="flex items-center gap-2">
                <Button
                    type="button"
                    className="ltr:mr-2 rtl:ml-2"
                    onClick={() => {
                        append({
                            name: '',
                            email: '',
                        })
                    }}
                >
                    افزودن کاربر
                </Button>
                <Button type="submit" variant="solid">
                    ارسال
                </Button>
            </div>
        </div>
    </Form>    
    )
}

export default DynamicForm
