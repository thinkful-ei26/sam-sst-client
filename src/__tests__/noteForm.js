import React from 'react';
import {shallow, mount} from 'enzyme';

import NoteForm from '../components/noteForm';

describe('<NoteForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NoteForm />);
    });

});
