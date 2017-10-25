import React, { Component } from 'react';
import {
    Scene,
    Router,
    Tabs,
    Drawer,
    Stack,
    Actions
  } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import { MainForm } from './components/MainForm';
import SignUpForm from './components/SignUpForm';
import { IncomeNavBar, OutlayNavBar } from './components/iconNavBar';
import DrawerBar from './components/Drawer/DrawerBar';
import Apl from './components/Apl';
import DrawerImage from './components/image/ic_list_black_24dp.png';
import IncomePage from './components/Servant/IncomePage';
import OutlayPage from './components/Servant/OutlayPage';

class RouterApp extends Component {
    render() {
        return (
            <Router sceneStyle={{ paddingTop: 0 }}>
                <Scene hideNavBar type={Actions.jump} >
                    <Scene key="main" >
                        <Scene 
                            key='mainForm' 
                            component={MainForm} sceneStyle={{ paddingTop: null }} 
                            hideNavBar initial 
                        />
                        <Scene 
                            key='loginForm' 
                            component={LoginForm} 
                            title="SignIn"
                            titleStyle={{ color: 'black', marginLeft: 100 }}
                            onLeft={() => Actions.main()}
                            back
                            navigationBarStyle={{ backgroundColor: 'yellow' }}
                            
                        />
                        <Scene 
                            key='signForm' 
                            component={SignUpForm} 
                            title="SignUp"
                            titleStyle={{ color: 'black', marginLeft: 100 }} 
                            back 
                            navigationBarStyle={{ backgroundColor: 'yellow' }}
                        />
                    </Scene>

                    <Scene key='apl'>
                        <Drawer 
                            key='drawer'
                            drawerImage={DrawerImage}
                            contentComponent={DrawerBar}
                            hideNavBar
                            drawerWidth={240}
                            // sceneStyle={{ paddingTop: 40 }}
                        >

                        <Scene 
                            key='home' 
                            component={Apl} 
                            title='Home'
                            navigationBarStyle={{ backgroundColor: 'skyblue' }}
                            titleStyle={{ marginLeft: 100 }}
                        />
                            <Tabs
                            key='tabbar'
                            showLabel={false}
                            swipeEnabled={false}
                            tabBarPosition='bottom'
                            activeBackground="blue"
                            >

                                <Stack
                                    key='incomePath'
                                    icon={IncomeNavBar}
                                   
                                >
                                    <Scene 
                                    key='income' component={IncomePage} title='Pemasukan'  
                                    navigationBarStyle={{ backgroundColor: 'skyblue' }}
                                    />
                                </Stack>

                                <Stack
                                    key='OutlayPath'
                                    icon={OutlayNavBar}
                                    
                                >
                                    <Scene 
                                    key='outlay' component={OutlayPage} title='Pengeluaran'
                                    navigationBarStyle={{ backgroundColor: 'skyblue' }}
                                    />
                                </Stack>
                            </Tabs>
                            
                        </Drawer>
                    </Scene>

                </Scene>
            </Router>
        );
    }
}

export default RouterApp;
