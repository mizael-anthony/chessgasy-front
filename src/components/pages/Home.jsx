import Banner from '../banner/Banner'
import TitleItem from '../../styles/helpers/TitleItem'
import { ActualityCard } from './Actuality'
import {GridItem} from '../../styles/helpers/GridItem'
import { ClubCard } from './Club'
import { PlayerCard } from './Player'
import { TournamentCard } from './Tournament'

export default function Home() {


    return (
        <>
            <Banner />
            <TitleItem title={"Actualités"} />
            <GridItem Component={<ActualityCard/>}/>
            
            <TitleItem title={"Tournois"} />
            <GridItem Component={<TournamentCard/>}/>

            <TitleItem title={"Clubs"} />
            <GridItem Component={<ClubCard/>}/>


            <TitleItem title={"Joueurs"} />
            <GridItem Component={<PlayerCard/>}/>

        </>
    )
}

