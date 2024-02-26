import React from "react";

function TabContent({ id, ariaLabelledby, isActive, form }) {
    const active = isActive ? "active show" : "";

    return (
        <div className={`tab-pane fade ${active}`} id={id} role="tabpanel"
             aria-labelledby={ariaLabelledby}>
            {form}
        </div>
    );
}

export default TabContent;