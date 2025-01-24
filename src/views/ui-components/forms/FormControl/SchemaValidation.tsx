import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { FormItem, Form } from '@/components/ui/Form'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { ZodType } from 'zod'

type FormSchema = {
    email: string
    userName: string
}

const validationSchema: ZodType<FormSchema> = z.object({
    email: z
        .string()
        .min(1, { message: 'الزامی است' })
        .email({ message: 'ایمیل نامعتبر است' }),
    userName: z
        .string()
        .min(1, { message: 'الزامی است' })
        .min(3, 'خیلی کوتاه است!')
        .max(12, 'خیلی بلند است!'),
})


const SchemaValidation = () => {
    const [submitting, setSubmitting] = useState(false)

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormSchema>({
        defaultValues: {
            email: '',
            userName: '',
        },
        resolver: zodResolver(validationSchema),
    })

    const onSubmit = (values: FormSchema) => {
        setSubmitting(true)
        setTimeout(() => {
            window.alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormItem
                label="ایمیل"
                invalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
            >
                <Controller
                    name="email"
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
            <FormItem
                label="نام کاربری"
                invalid={Boolean(errors.userName)}
                errorMessage={errors.userName?.message}
            >
                <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="نام کاربری"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <FormItem>
                <Button type="submit" variant="solid" loading={submitting}>
                    ارسال
                </Button>
            </FormItem>
        </Form>
    )
}

export default SchemaValidation
