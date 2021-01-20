import React from 'react';

const Main = () => {
    return (
        <>
            <div className="main-page">
                <div>
                    <p className="descrition1">Less stress when sharing bills.</p>
                    <p className="descrition2">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                </div>
                <div>
                    <img src={window.split_bills} alt="split" />
                </div>
            </div>
        </>
    )
}
export default Main;