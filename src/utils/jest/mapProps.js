const mapProps = (props) => {

    const mappedProps = Object.keys(props).reduce((accum, key) => {
        let mapped;

        const propValue = props[key];
        switch(typeof props[key]) {
            case "object":
                 mapped = JSON.stringify(propValue);
                break;
            default:
                mapped = propValue;
                break;
        }

        return {
            ...accum,
            [key]: mapped
        }
    }, {})

    return mappedProps;
}

export default mapProps;

