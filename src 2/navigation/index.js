import {StackNavigator} from 'react-navigation';
import SignIn from './../view/userSign/signin'
import SignUp from './../view/userSign/signup'
import SignUpSuccess from './../view/userSign/signupsuccess'
import HomeTabBar from './homeTabBar'
import ListMachine from './../view/listmachine'
import DetailMachine from './../view/detailMachine'
import Service from './../view/service'
import Market from './../view/market'
import Network from './../view/network'
import Setting from './../view/setting'
import ListAddress from './../view/listAddress'
import FormAddress from './../view/formAddress'
import OrderDetail from './../view/orderDetail'
import Serviceprocess from './../view/serviceprocess'
import WebView from './../view/webview'

export default StackNavigator({
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        },
        SignUp: {
            screen: SignUp,
        },
        SignUpSuccess: {
            screen: SignUpSuccess,
        },
        Home: {
            screen: HomeTabBar,
            navigationOptions: {
                // header: null
                // headerTruncatedBackTitle:'666'
            }
        },
        ListMachine: {
            screen: ListMachine,
            headerBackground: '#000',
            navigationOptions: {
                title: '选择机器'
            }
        },
        DetailMachine: {
            screen: DetailMachine,
            navigationOptions: {
                title: '产品详情'
            }
        },
        Service: {
            screen: Service,
            navigationOptions: {
                title: '维修服务'
            }
        },
        Market: {
            screen: Market,
            navigationOptions: {
                title: '配件列表'
            }
        },
        Network: {
            screen: Network,
            navigationOptions: {
                title: '网点服务'
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                title: '系统设置'
            }
        },
        ListAddress: {
            screen: ListAddress,
            navigationOptions: {
                title: '收货地址管理'
            }
        },
        FormAddress: {
            screen: FormAddress,
            navigationOptions: {
                title: '新增收货地址'
            }
        },
        OrderDetail: {
            screen: OrderDetail,
            navigationOptions: {
                title: '订单详情'
            }
        },
        Serviceprocess: {
            screen: Serviceprocess,
            navigationOptions: {
                title: '服务进度'
            }
        },
        WebView: {
            screen: WebView,
            navigationOptions: {
                title: 'webView页面'
            }
        },
    },
    {
        // headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: true,
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#fff',
                borderBottomColor: '#eee'
            },
            headerTitleStyle: {
                // color:'skyblue'
                fontSize: 17,
                fontWeight: '400',
                alignSelf: 'center'
            },
            headerBackTitleStyle: {
                color: '#333'
            }
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
               /* easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,*/
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });
                console.log(sceneProps,'++navigation====')
                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);
