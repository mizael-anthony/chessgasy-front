import {
	Step, StepLabel,
	Stepper, Box, Paper,
	Button, StepContent, Typography,
} from "@mui/material"
import { createContext } from "react"
import { useState, useContext } from "react"
import { API } from "../api/API"
import { dataContext, usePlayerContext } from "../App"
import Adress from "../components/pages/Adress"
import Connection from "../components/pages/Connection"
import Fide from "../components/pages/Fide"
import Personnal from "../components/pages/Personnal"


// const player = {
// 	username: '', email: '', password1: '', password2: '',
// 	lastname: '', firstname: '', standard_elo: '', rapid_elo: '', blitz_elo: ''
// }


export const StepperItems = () => {

	const { player, changePlayer } = usePlayerContext()
	const steps = getSteps()
	const [activeStep, setActiveStep] = useState(0)
	// const { data } = useContext(dataContext)

	// console.log(data)

	const handleNext = () => {
		changePlayer({ ...player, isCompleted: false })
		setActiveStep(preActiveStep => preActiveStep + 1)
	}

	const handlePrev = () => {
		setActiveStep(preActiveStep => preActiveStep - 1)
	}


	const handleSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append("username", player.username)
		formData.append("email", player.email)
		formData.append("password1", player.password1)
		formData.append("password2", player.password2)
		formData.append("last_name", player.last_name)
		formData.append("first_name", player.first_name)
		formData.append("photo", player.photo)
		formData.append("birthday", player.birthday)
		formData.append("sex", player.sex)
		formData.append("contact", player.contact)
		formData.append("longitude", 0)
		formData.append("latitude", 0)
		formData.append("province", player.province)
		formData.append("region", player.region)
		formData.append("town", player.town)
		formData.append("quarter", player.quarter)
		formData.append("id_fide", player.id_fide)
		formData.append("title", player.title)
		formData.append("standard_elo", player.standard_elo)
		formData.append("rapid_elo", player.rapid_elo)
		formData.append("blitz_elo", player.blitz_elo)


		API.registerPlayer(formData)
			.then(success => {
				console.log(success)
			})
			.catch(error => {
				console.log(error)
			})



	}


	function getSteps() {
		return ["Compte", "Informations FIDE", "Adresse", "Informations personnelles",]
	}


	function getStepsContents(step) {
		switch (step) {
			case 0:
				return <Connection />
			case 1:
				return <Fide />

			case 2:
				return <Adress />

			case 3:
				return <Personnal />


			default:
				return "Etape inconnue"
		}
	}


	return (
		<Box

			sx={{
				width: '50%', margin: '1em auto',

			}}
		>
			<form encType="multipart/form-data" onSubmit={handleSubmit}>
				<Paper elevation={10} sx={{ padding: '10px' }}>



					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>
									{label}
								</StepLabel>
							</Step>
						))}

					</Stepper>


					<>
						{activeStep === steps.length ? (
							<Button variant="contained" type={'submit'}>
								S'enregistrer
							</Button>
						) : (
							<>
								{getStepsContents(activeStep)}
								<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
									<Button variant="contained" onClick={handlePrev} disabled={activeStep === 0}>
										Revenir
									</Button>

									<Button variant="contained" onClick={handleNext} disabled={!player.isCompleted}>
										{activeStep === steps.length - 1 ? "Terminer" : "Continuer"}
									</Button>
								</Box>
							</>
						)}
					</>

				</Paper>
			</form>

		</Box>
	)

}
