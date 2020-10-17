import React from 'react'
import '../styles/Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=360860835065763"
                title="widge"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
