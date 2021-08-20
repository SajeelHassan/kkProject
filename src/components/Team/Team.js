import React from 'react'
import * as classes from './Team.module.css';
import teamPlayer from '../../assets/images/team/teamplayer.png'

const Team = () => {
    return (
        <div className={classes.sectionWrapper}>
            <p className={classes.sectionTitle}>Our Team</p>
            <div className={classes.teamMembers}>
                <div className={classes.teamMember}>
                    <img src={teamPlayer} />
                    <p>Director</p>
                </div>
                <div className={classes.teamMember}>
                    <img src={teamPlayer} />
                    <p>Director</p>
                </div>
                <div className={classes.teamMember}>
                    <img src={teamPlayer} />
                    <p>Director</p>
                </div>
                <div className={classes.teamMember}>
                    <img src={teamPlayer} />
                    <p>Director</p>
                </div>
            </div>
        </div>
    )
}
export default Team;