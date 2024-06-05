import Box from '@mui/material/Box'
import { styles } from '~/containers/tutor-home-page/general-info-step/GeneralInfoStep.styles'
import { IGeneralInfoStep } from '~/containers/tutor-home-page/general-info-step/interfaces/GeneralInfoStep'
import React from 'react'
import boyUnderLamp from '~/assets/img/tutor-home-page/become-tutor/general-info.svg'
import AsyncAutocomplete from '~/components/async-autocomlete/AsyncAutocomplete'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
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
            labelField={'First Name'}
            service={undefined}
            textFieldProps={undefined}
            value={undefined}
            valueField={undefined}
          />
          <AsyncAutocomplete
            axiosProps={undefined}
            fetchCondition={undefined}
            fetchOnFocus={undefined}
            labelField={'Last Name'}
            service={undefined}
            textFieldProps={undefined}
            value={undefined}
            valueField={undefined}
          />
          <AsyncAutocomplete
            axiosProps={undefined}
            fetchCondition={undefined}
            fetchOnFocus={undefined}
            labelField={'Country'}
            service={undefined}
            textFieldProps={undefined}
            value={undefined}
            valueField={undefined}
          />
          <AsyncAutocomplete
            axiosProps={undefined}
            fetchCondition={undefined}
            fetchOnFocus={undefined}
            labelField={'City'}
            service={undefined}
            textFieldProps={undefined}
            value={undefined}
            valueField={undefined}
          />
          <TextField
            fullWidth
            label='Describe in short you professional status'
            multiline
            required
            rows={4}
          />
          <FormControlLabel
            control={<Checkbox required />}
            label='I confirm that I am 18 years old'
          />
        </form>
        {btnsBox}
      </Box>
    </Box>
  )
}

export default GeneralInfoStep
