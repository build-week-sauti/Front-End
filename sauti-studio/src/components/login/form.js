import React, { useState} from 'react';

const NoteForm = props => {
    const [teamMember, setTeamMember] = useState ({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value})
        console.log(teamMember);
    }

    const submitForm = e => {
        e.preventDefault();
        setTeamMember({ name: '', email: '', role: ''});
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' placeholder='Name' onChange={handleChanges} value={teamMember.name} />
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' placeholder='Email' onChange={handleChanges} value={teamMember.email} />
            <label htmlFor='role'>Role</label>
            <input id='role' name='role' placeholder='Role' onChange={handleChanges} value={teamMember.role} />
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default NoteForm; 