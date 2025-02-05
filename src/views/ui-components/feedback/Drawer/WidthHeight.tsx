import { useState } from 'react'
import Button from '@/components/ui/Button'
import Drawer from '@/components/ui/Drawer'

const WidthHeight = () => {
    const [verticalOpen, setVerticalOpen] = useState(false)
    const [horizontalOpen, setHorizontalOpen] = useState(false)

    const onVerticalOpen = () => {
        setVerticalOpen(true)
    }

    const onHorizontalOpen = () => {
        setHorizontalOpen(true)
    }

    const onDrawerClose = () => {
        setVerticalOpen(false)
        setHorizontalOpen(false)
    }

    return (
        <div>
            <Button
                className="mx-2"
                onClick={() => onVerticalOpen()}
            >
                کشوی عمودی
            </Button>
            <Button onClick={() => onHorizontalOpen()}>
                کشوی افقی
            </Button>
            <Drawer
                title="کشوی عمودی"
                isOpen={verticalOpen}
                placement="right"
                width={600}
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                محتوای کشو
            </Drawer>
            <Drawer
                title="کشوی افقی"
                isOpen={horizontalOpen}
                placement="bottom"
                height={300}
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                محتوای کشو
            </Drawer>
        </div>
    )
}

export default WidthHeight
