import React from "react";
import styled from "styled-components";
import oc from "open-color";

const LoginContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
);

const Title = styled.div`
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;

export default LoginContent;
