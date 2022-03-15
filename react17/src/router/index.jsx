import React from 'react';
import { HashRouter, Routes ,Route } from 'react-router-dom';
import Login from '../pages/login'
import DefaultComponent from '../pages/default'
const BasicMap = () => {
	return (
		<HashRouter>
			{/* 低一些版本会是Switch */}
			<Routes>
				{/* 低一些版本会是component={Login} */}
				<Route exact path='/login' element={<Login/>}></Route>
				<Route exact path='/' element={<DefaultComponent/>}></Route>
			</Routes>
		</HashRouter>
	);
};
export default BasicMap
