import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

function TooltipStrap () {  
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return(
        <div style={{width:"800px"}}>
              <p>
                Somewhere in here is a{' '}
                <a href="https://example.com"target="_blank"rel="noreferrer"id="TooltipExample">
                tooltip
                </a>
            </p>
            <Tooltip isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                Hello world!
            </Tooltip>
        </div>
    )
}
export default TooltipStrap;