import Box from '@mui/material/Box'
import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'
import { IGeneralInfoStep } from '~/containers/tutor-home-page/general-info-step/interfaces/GeneralInfoStep'
import React from 'react'
import boyUnderLamp from '~/assets/img/tutor-home-page/become-tutor/general-info.svg'
import AsyncAutocomplete from '~/components/async-autocomlete/AsyncAutocomplete'
const GeneralInfoStep: React.FC<IGeneralInfoStep> = ({ btnsBox }) => {
  return (
    <Box sx={styles.container}>
      <Box>
        <img alt='The boy under the lamp' src={boyUnderLamp} />
      </Box>
      <Box>
        <form>
          <AsyncAutocomplete
            axiosProps={undefined}
            fetchCondition={undefined}
            fetchOnFocus={undefined}
            labelField={undefined}
            service={undefined}
            textFieldProps={undefined}
            value={undefined}
            valueField={undefined}
          />
        </form>
        {btnsBox}
      </Box>
    </Box>
  )
}

export default GeneralInfoStep
