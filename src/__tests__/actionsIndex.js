import {
    fetchUserSuccess,
    fetchUser,
    // deleteStudentSuccess,
    studentClicked,
    noteClicked,
    // addNote,
    // addStudent,
    // stPushed,
    // viewNotesPushed,
    // clearData,
    // deleteStudent,
    // fetchStudentsSuccess,
    // fetchStudents,
    // postStudent,
    // postNote
} from '../actions/index';
import { API_BASE_URL } from '../config'

describe('noteClicked', () => {
    it('Should return the action', () => {
        const id ='123';
        const subjective ='asdf';
        const objective ='14';
        const assessment ='sdf';
        const plan ='asdf';
        const createdAt ='1/2/3';
        const action = noteClicked( id, subjective, objective, assessment, plan, createdAt);
        expect(action.type).toEqual('NOTE_CLICKED');
        expect(action.id).toEqual(id);
        expect(action.subjective).toEqual(subjective);
        expect(action.objective).toEqual(objective);
        expect(action.assessment).toEqual(assessment);
        expect(action.plan).toEqual(plan);
        expect(action.createdAt).toEqual(createdAt);

    });
});

describe('studentClicked', () => {
    it('Should return the action', () => {
        const id = '123456';
        const name = 'sam';
        const goals = 'ged';
        const action = studentClicked(id, name, goals);
        expect(action.type).toEqual('STUDENT_CLICKED');
        expect(action.name).toEqual(name);
        expect(action.id).toEqual(id);
        expect(action.goals).toEqual(goals);
    });
});

describe('fetchUserSuccess', () => {
    it('Should return the action', () => {
        const user = {username:'sts'}
        const action = fetchUserSuccess(user);
        expect(action.type).toEqual('FETCH_USER_SUCCESS');
        expect(action.data).toEqual(user);
    });
});

describe('fetchUser', () => {
    it('Should dispatch fetchUserSuccess', () => {
        const data = {
            notes: [],
            _id: "5c375be634a2fb2210da5e83",
            name: "new",
            goals: "learn how to code ",
            createdAt: "2019-01-10T14:51:18.279Z",
            updatedAt: "2019-01-10T14:51:18.279Z"
        }

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return data;
                }
            })
        );
        const dispatch = jest.fn();
        return fetchUser()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/user`);
            expect(dispatch).toHaveBeenCalledWith(fetchUserSuccess(data));
        });
    });
});