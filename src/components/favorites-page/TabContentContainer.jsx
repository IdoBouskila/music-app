const TabContentContainer = ({ entities, children }) => {
    const isEmpty = ! entities.length;

    return (
        <>
        {
            isEmpty ?
                <div className='empty-list'>
                    <h2>It seems like this list is empty.</h2>
                    <h2 className='gradient-text'>Start exploring and discovering new music today! Enjoy the journey!</h2>
                </div>
            :
            <>
                { children }
            </>
        }
        </>
    );
};

export default TabContentContainer;