import React from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import Home2 from './../view/home'
import Order from './../view/order'
import User from './../view/user'

export default TabNavigator({

    Home2: {
        screen: Home2,
        navigationOptions: {
            header: null,
            title: '首页',
            tabBarIcon: ({tintColor}) => (<Icon name={'home'} size={22} color={tintColor}/>)
        }
    },
    Order: {
        screen: Order,
        backBehavior:'initialRoute',
        navigationOptions: {
            title: '订单',
            // headerTitle:'我的订单(20)',
            // headerBackImage:null,
            // headerTruncatedBackTitle:'666',
            tabBarIcon: ({tintColor}) => (<Icon2 name={'file-text'} size={22} color={tintColor}/>)
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            header: null,
            title: '我的',
            tabBarIcon: ({tintColor}) => (<Icon name={'user'} size={22} color={tintColor}/>)
        }
    }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior:'initialRoute',
    tabBarOptions: {
        activeTintColor: '#ec4d3d',
        // activeBackgroundColor:'skyblue',
        inactiveTintColor:'#b6b6b6',
        style: {
            backgroundColor: '#f8f8f8',
            // borderTopColor:'#eee'
        },
    },

})