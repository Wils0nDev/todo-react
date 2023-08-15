import React from "react";

function useModal(){

    const [visible, setVisible] = React.useState(false);

    return(
        {visible,setVisible}
    );
}

export { useModal };