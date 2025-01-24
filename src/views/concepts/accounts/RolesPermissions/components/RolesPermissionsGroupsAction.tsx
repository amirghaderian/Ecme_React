import Button from '@/components/ui/Button'
import { useRolePermissionsStore } from '../store/rolePermissionsStore'

const RolesPermissionsGroupsAction = () => {
    const { setRoleDialog } = useRolePermissionsStore()

    return (
        <div>
            <Button
                variant="solid"
                onClick={() =>
                    setRoleDialog({
                        type: 'new',
                        open: true,
                    })
                }
            >
                نقش ایجاد کنید
            </Button>
        </div>
    )
}

export default RolesPermissionsGroupsAction
