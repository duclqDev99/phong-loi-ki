import React from "react";

function TabsListing({tabNav, tabContent}) {
    return (
        <div className="tabs-listing">
            <nav>
                <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                    {tabNav.map((tab, index) => (
                        React.cloneElement(tab, { key: index.toString() })
                    ))}
                </div>
            </nav>
            <div className="bg-gray tab-content" id="nav-tabContent">
                {tabContent.map((tab, index) => (
                    React.cloneElement(tab, { key: index.toString() })
                ))}
            </div>
        </div>
    );
}

export default TabsListing;