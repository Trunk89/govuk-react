import type { FieldInputProps } from 'react-final-form';

import React from 'react';
import { Field } from 'react-final-form';

import { withKnobs } from '@storybook/addon-knobs';
import { FinalFormWrapper } from '@govuk-react/storybook-components';

import MultiChoice from '@govuk-react/multi-choice';
import Radio from '.';

const required = (value) => (value ? undefined : 'Required');

interface RadioGroupProps {
  input?: FieldInputProps<any, HTMLElement>;
  meta?: {
    active?: boolean;
    dirty?: boolean;
    dirtySinceLastSubmit?: boolean;
    error?: any;
    initial?: any;
    invalid?: boolean;
    pristine?: boolean;
    submitError?: any;
    submitFailed?: boolean;
    submitSucceeded?: boolean;
    touched?: boolean;
    valid?: boolean;
    visited?: boolean;
  };
  label?: string;
  hint?: string;
  inline?: boolean;
  options?: {
    title?: string;
    value?: string;
  }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, hint, options, inline, input, meta }: RadioGroupProps) => (
  <div>
    <MultiChoice label={label} hint={hint} meta={meta}>
      {options.map((o) => (
        <div key={o.value}>
          <Radio {...input} value={o.value} inline={inline} checked={o.value === input.value}>
            {o.title}
          </Radio>
        </div>
      ))}
    </MultiChoice>
  </div>
);

RadioGroup.defaultProps = {
  input: undefined,
  meta: {},
  hint: undefined,
  inline: false,
  options: [],
  label: undefined,
};

export default {
  title: 'Form/Radio',
  component: Radio,
  decorators: [withKnobs],
};

export const Default: React.FC = () => <Radio name="group1">Radio button text example</Radio>;

export const RadioStacked: React.FC = () => (
  <div>
    <Radio name="group1">Waste from animal carcasses</Radio>
    <Radio name="group1">Waste from mines or quarries</Radio>
    <Radio name="group1">Farm or agricultural waste</Radio>
  </div>
);

export const RadioInline: React.FC = () => (
  <div>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </div>
);

export const RadioDisabled: React.FC = () => (
  <div>
    <Radio name="group1" disabled>
      Disabled checkbox option
    </Radio>
  </div>
);

export const RadioPreselected: React.FC = () => (
  <div>
    <Radio name="group1" defaultChecked>
      Farm or agricultural waste
    </Radio>
  </div>
);

export const RadioPreselectedDisabled: React.FC = () => (
  <div>
    <Radio name="group1" disabled defaultChecked>
      Farm or agricultural waste
    </Radio>
  </div>
);

export const RadioWithHintText: React.FC = () => (
  <div>
    <Radio
      name="group1"
      hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
    >
      Sign in with Government Gateway
    </Radio>
    <Radio
      name="group1"
      hint="You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
    >
      Sign in with GOV.UK Verify
    </Radio>
  </div>
);

export const UsageWithFinalReduxFormMultiCheckboxValidation: React.FC = () => (
  <FinalFormWrapper>
    <Field
      name="likesAnimals"
      label="Do you like animals?"
      hint="You must tell us"
      component={RadioGroup}
      options={[
        { title: 'Yep', value: 'yes' },
        { title: 'Nope', value: 'no' },
      ]}
      validate={required}
      inline
    />
  </FinalFormWrapper>
);
