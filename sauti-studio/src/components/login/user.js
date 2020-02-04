import React from 'react';

export default function TeamList(props){
    return (
        <div className='team-list'>
            {props.team.map(member => (
                <div className='team-member' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}  