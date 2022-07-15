import {
	Step, StepLabel,
	Stepper, Box, Paper,
	Button, StepContent, Typography,
} from "@mui/material"
import { useState } from "react"
import Adress from "../components/pages/Adress"
import Connexion from "../components/pages/Connexion"
import Personnal from "../components/pages/Personnal"



export const StepperItems = () => {

	const steps = getSteps()
	const [activeStep, setActiveStep] = useState(0)

	const [player, setPlayer] = useState({
		username: '', password1: '', password2:'',
		
	})


	const handleNext = () => {
		setActiveStep(preActiveStep => preActiveStep + 1)
	}

	const handlePrev = () => {
		setActiveStep(preActiveStep => preActiveStep - 1)
	}


	function getSteps() {
		return ["Compte", "Informations personnelles", "Adresse"]
	}


	function getStepsContents(step) {
		switch (step) {
			case 0:
				return <Connexion />
			case 1:
				return <Personnal />
			case 2:
				return <Adress />


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
						<>
							<Button variant="contained" type={'submit'}>
								S'enregistrer
							</Button>
						</>
					) : (
						<>
							{getStepsContents(activeStep)}
							<Button variant="contained" onClick={handlePrev} disabled={activeStep === 0}>
								Revenir
							</Button>

							<Button variant="contained" onClick={handleNext}>
								{activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
							</Button>


						</>

					)}
				</>







			</Paper>


		</Box>
	)

}
