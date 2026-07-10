
function hoc(Component) {
    // console.log("Component", Component)
    return function Wrapped() {
        const isLogged = true;
        const arr = [1, 2, 3];
        const str = "Please Login";
        if (isLogged) {
            return <Component value={arr} />;
        } else {
            return <Component value={str} />;
        }
    }
}

function HOC({ value }) {
    return (
        <p>{value}</p>
    )
};

const EnhancedHOC = hoc(HOC);

export default EnhancedHOC;
