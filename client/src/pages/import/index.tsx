import { View } from "@tarojs/components";
import { useState } from "@tarojs/taro";

export default function ImportPage() {
  const [data, setData] = useState([]);

  return <View>import page {data.length}</View>;
}
