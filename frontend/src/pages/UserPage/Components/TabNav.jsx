import React from "react";

function TabNav({id, dataBsTarget, ariaControls, isActive, label}) {
    const active = isActive ? "active" : "";

    return (
        <button className={`nav-link fw-light text-uppercase ${active}`}
                id={id}
                data-bs-toggle="tab"
                data-bs-target={dataBsTarget}
                type="button"
                role="tab"
                aria-controls={ariaControls}
                aria-selected={isActive}>{label}
        </button>
    );
}

export default TabNav;