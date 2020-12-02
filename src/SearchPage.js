import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                channel="Clever Programmer"
                verified
                sub="660K"
                noOfVideos={382}
                description="Very good channel for learners and developers ..!!Good teacher nice youtuber"
            />
            <hr/>

            <VideoRow
                views="4.0M"
                subs="695K"
                timestamp="59 seconds ago"
                description="It is 1 hour course"
                channel="clever Programmer"
                title="lets build you tube clone"
                image="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                />
        </div>
    )
}

export default SearchPage
