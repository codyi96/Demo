这是一个Bug展示样例：

- 环境：React Native 0.59.9（Android）
- 特征：实现如下布局层级（RelativeLayout => FrameLayout => ReactRootView）
- bug表现：ReactRootView的onMeasure方法循环调用