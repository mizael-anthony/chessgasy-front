import Banner from '../../banner/Banner'
import TitleItem from '../../../styles/helpers/TitleItem'
import Actuality from '../../../menus/Actuality'
import Player from '../../../menus/Player'
import {GridItem} from '../../../styles/helpers/GridItem'
import Tournament from '../../../menus/Tournament'
import Club from '../../../menus/Club'

export default function Home() {


    return (
        <>
            <Banner />
            <TitleItem title={"Actualités"} />
            <GridItem Component={<Actuality/>}/>
            
            <TitleItem title={"Tournois"} />
            <GridItem Component={<Tournament/>}/>

            <TitleItem title={"Clubs"} />
            <GridItem Component={<Club/>}/>


            <TitleItem title={"Joueurs"} />
            <GridItem Component={<Player/>}/>

        </>
    )
}

