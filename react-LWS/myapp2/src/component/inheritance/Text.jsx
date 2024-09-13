import Emoji from './Emoji';
export default class Text extends Emoji{
    constructor(props){
        super(props)
    }
    render(){
        const decorate = this.addEmoji('I am JS fan','❤️' )
        return (super.render(decorate))
    }
}