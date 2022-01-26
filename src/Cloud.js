import React from 'react';
import TagCloud from 'react-tagcloud';

function Cloud({data, minSize, maxSize, onNameClicked}){
    return <TagCloud minSize={minSize} maxSize={maxSize} tags={data} onClick={name => onNameClicked(name)}/>
}

Cloud.defaultProps = {
    tags: [{value: 'No Data', count: 1}],
    minSize: 16,
    maxSize: 64,
    onClick: (name) => {}
}

export default Cloud