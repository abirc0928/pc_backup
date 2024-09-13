export default function BoilingVerdict({celsius = 0}){
    if(celsius >= 100 ){
        return <p>The water would boil</p>
    }
    return <p>Water Would not boil</p>
}