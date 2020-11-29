import React from "react";
import { PageProps } from "gatsby";

import Button from "../components/Button";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div>
            Hello World!
            <Button styleType="orange">Trial</Button>
        </div>
    );
};

export default IndexPage;
