import Box from '@mui/material/Box'
import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'
import { IGeneralInfoStep } from '~/containers/tutor-home-page/general-info-step/interfaces/GeneralInfoStep'
import React from 'react'

const GeneralInfoStep: React.FC<IGeneralInfoStep> = ({ btnsBox }) => {
  return (
    <Box sx={styles.container}>
      GeneralInfo step
      {btnsBox}
    </Box>
  )
}

export default GeneralInfoStep
