import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

import '../css/normalize.css';
import '../css/skeleton.css';

class Artists extends React.Component{
	render(){

		const {artist, i} = this.props.artist;

		return(
			<figure className='grid-figure'>
				<div className='grid-figure-wrap'>
					<Link href={`/auditory?code=${this.props.artist.code}`}>
						<img src={this.props.artist.display_src} alt={this.props.artist.name} className='grid-artist' />
					</Link>
				</div>
			</figure>
		)
	}
}

export default Artists;
