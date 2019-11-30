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
    navigationBarTitleText: "首页",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onShareAppMessage() {
    return {}
  }

  render() {
    const a = Array(1000).fill(1, 0, 1000);

    console.log(a);

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
            {a.map((item, index) => {
              return (
                <View key={index} className="item">
                  <View className="name">炸窝{index}</View>
                  <View className="job">战士</View>
                  <View className="attendance">100%</View>
                  <View className="EP">EP</View>
                  <View className="GP">GP</View>
                  <View className="PR">PR</View>
                  <View className="priority">{index}</View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
