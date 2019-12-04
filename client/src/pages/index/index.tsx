import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView, Input, Block, Picker } from "@tarojs/components";
import "./index.scss";
import Toggle from "./Toggle";
import Filter from "./Filter";

export default class Index extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  constructor() {
    super(...arguments);

    this.state = {
      data: [],
      dataFormat: [],
      searchInput: "",
      sorts: {
        EP: "",
        GP: "",
        PR: ""
      }
    };
  }

  componentWillMount() {}

  componentDidMount = () => {
    Taro.cloud
      .database()
      .collection("data")
      .orderBy("date", "desc")
      .where({})
      .get({
        success: res => {
          const data = res.data[0].data.roster.filter(
            item => item.length === 5
          );

          this.setState(
            {
              data,
              dataFormat: data
            },
            () => {
              this.updateSort("PR");
            }
          );
        }
      });
  };

  componentWillUnmount() {}

  componentDidShow() {}

  updateSort = type => {
    const oldStatus = this.state.sorts[type];
    const newStatus = {
      EP: "",
      GP: "",
      PR: ""
    };

    if (oldStatus === "") newStatus[type] = "down";
    else if (oldStatus === "down") newStatus[type] = "up";
    else if (oldStatus === "up") newStatus[type] = "";

    this.newStatus = newStatus;

    this.setState({
      sorts: newStatus
    });

    this.sortTable();
  };

  newStatus;

  onShareAppMessage() {
    return {};
  }

  searchInputInput = e => {
    this.searchInput = e.detail.value;

    this.sortTable();
  };

  searchInput;

  sortTable = () => {
    const [type1, type2, number] = this.filterConfig;
    const searchInput = this.searchInput;
    let dataFormat = JSON.parse(JSON.stringify(this.state.data)).filter(
      item => item[0]
    );

    if (number) {
      dataFormat = dataFormat.filter(item => {
        let value = item[type1 + 2];

        if (type2 === 0) {
          return value > number;
        } else if (type2 === 1) {
          return value === number;
        } else if (type2 === 2) {
          return value < number;
        }
      });
    }

    if (searchInput) {
      dataFormat = dataFormat.filter(item => {
        return (
          item[0]
            .toLocaleLowerCase()
            .indexOf(searchInput.toLocaleLowerCase()) !== -1
        );
      });
    }

    let index = -1;
    let sortType = "";
    let sorts = this.newStatus;

    if (sorts) {
      if (sorts["EP"]) {
        (index = 2), (sortType = sorts["EP"]);
      }
      if (sorts["GP"]) {
        (index = 3), (sortType = sorts["GP"]);
      }
      if (sorts["PR"]) {
        (index = 4), (sortType = sorts["PR"]);
      }

      if (index !== -1) {
        if (sortType === "up")
          dataFormat.sort((x, y) => {
            return x[index] - y[index];
          });

        if (sortType === "down")
          dataFormat.sort((x, y) => {
            return y[index] - x[index];
          });
      }
    }

    this.setState({
      dataFormat
    });
  };

  filterConfig;

  filterOnChange = e => {
    this.filterConfig = e;

    this.sortTable();
  };

  render() {
    const { sorts, dataFormat } = this.state;

    return (
      <View className="index">
        <View className="search">
          <Input
            placeholder="搜索"
            onInput={this.searchInputInput}
            className="searchInput"
          ></Input>
        </View>
        <Filter onChange={this.filterOnChange}></Filter>
        <ScrollView scrollX={true}>
          <View className="table">
            <View className="item header">
              <View className="name">名字</View>
              <View className="job">职业</View>
              <View onClick={() => this.updateSort("EP")} className="EP">
                <Toggle type={sorts.EP}>EP</Toggle>
              </View>
              <View onClick={() => this.updateSort("GP")} className="GP">
                <Toggle type={sorts.GP}>GP</Toggle>
              </View>
              <View onClick={() => this.updateSort("PR")} className="PR">
                <Toggle type={sorts.PR}>PR</Toggle>
              </View>
            </View>
            {dataFormat.map((item, index) => {
              return (
                <View key={index} className="item">
                  <View className="name">{item[0]}</View>
                  <View className="job">{item[1]}</View>
                  <View className="EP">{item[2]}</View>
                  <View className="GP">{item[3]}</View>
                  <View className="PR">{item[4]}</View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
