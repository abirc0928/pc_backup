import useWindowWidth from '../../customHooks/useWindowWidth'

export default function LayoutComponentTwo(){
    const onSmallScreen = useWindowWidth(768)
    return(
        <div>
            <h1 className={onSmallScreen ? 'small': 'large'}>
                This is anther Component
            </h1>
        </div>
    )
}