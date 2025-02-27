import React from 'react';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const ProtectShipping = props => {
    const {children} = props
    const router = useRouter()
    const { global } = useSelector((state) => state.globalSettings)
    const handleRedirect = ()=>{
        router.push('/')
    }
    return (
        <div>
            {
                global && Number.parseInt(global?.shipping_policy_status)===0 ? handleRedirect() : children
            }

        </div>
    );
};



export default ProtectShipping;
