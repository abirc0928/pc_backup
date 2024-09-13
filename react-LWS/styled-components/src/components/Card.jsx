import nerdImage from '../assets/images/illustration.png';
import Button from './Button';

import { StyledTitle } from './styles/Custom.styles';

import { CardContainer, ContentContainer, ButtonContainer } from './styles/Container.styles';
import { Tag, H1,P, Image } from './styles/Elements'

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color='#38e819'>EXCLUSIVE</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" color="#fff" />
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}