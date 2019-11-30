import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <ScrollView scrollX={true}>
          <View className="table">
            <View className="item">
              <View className="name">名字</View>
              <View className="job">职业</View>
              <View className="attendance">出勤率</View>
              <View className="EP">EP</View>
              <View className="GP">GP</View>
              <View className="PR">PR</View>
              <View className="priority">优先级</View>
            </View>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1].map(
              item => {
                return <View className="item"></View>;
              }
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
