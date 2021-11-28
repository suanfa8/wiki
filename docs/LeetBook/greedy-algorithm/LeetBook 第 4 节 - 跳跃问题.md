# 第 4 节 跳跃问题

这一节我们的跳跃问题也是使用「贪心算法」解决的经典问题。对于不同的目标「贪心算法」贪心的点是不一样的。大家可以在学习完这两个例题之后，分析它们之间的区别。

---

## 例 1：「力扣」第 55 题：跳跃游戏（中等）

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

**示例 1:**

```
输入: [2,3,1,1,4]
输出: true
解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。
```

**示例 2:**

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

### 📺 视频题解
![55. 跳跃游戏 v2(1).mp4](faf3fd9c-dbee-4d4f-8acd-975b78a5bb35)

### 📖 文字题解

设想一下，对于数组中的任意一个位置 $y$，我们如何判断它是否可以到达？根据题目的描述，只要存在一个位置 $x$，它本身可以到达，并且它跳跃的最大长度为 $x + \textit{nums}[x]$，这个值大于等于 $y$，即 $x + \textit{nums}[x] \geq y$，那么位置 $y$ 也可以到达。

换句话说，对于每一个可以到达的位置 $x$，它使得 $x+1, x+2, \cdots, x+\textit{nums}[x]$ 这些连续的位置都可以到达。

这样以来，我们依次遍历数组中的每一个位置，并实时维护 **最远可以到达的位置**。对于当前遍历到的位置 $x$，如果它在 **最远可以到达的位置** 的范围内，那么我们就可以从起点通过若干次跳跃到达该位置，因此我们可以用 $x + \textit{nums}[x]$ 更新 **最远可以到达的位置**。

在遍历的过程中，如果 **最远可以到达的位置** 大于等于数组中的最后一个位置，那就说明最后一个位置可达，我们就可以直接返回 `True` 作为答案。反之，如果在遍历结束后，最后一个位置仍然不可达，我们就返回 `False` 作为答案。

以题目中的示例一

```
[2, 3, 1, 1, 4]
```

为例：

- 我们一开始在位置 $0$，可以跳跃的最大长度为 $2$，因此最远可以到达的位置被更新为 $2$；

- 我们遍历到位置 $1$，由于 $1 \leq 2$，因此位置 $1$ 可达。我们用 $1$ 加上它可以跳跃的最大长度 $3$，将最远可以到达的位置更新为 $4$。由于 $4$ 大于等于最后一个位置 $4$，因此我们直接返回 `True`。

我们再来看看题目中的示例二

```
[3, 2, 1, 0, 4]
```

- 我们一开始在位置 $0$，可以跳跃的最大长度为 $3$，因此最远可以到达的位置被更新为 $3$；

- 我们遍历到位置 $1$，由于 $1 \leq 3$，因此位置 $1$ 可达，加上它可以跳跃的最大长度 $2$ 得到 $3$，没有超过最远可以到达的位置；

- 位置 $2$、位置 $3$ 同理，最远可以到达的位置不会被更新；

- 我们遍历到位置 $4$，由于 $4 > 3$，因此位置 $4$ 不可达，我们也就不考虑它可以跳跃的最大长度了。

在遍历完成之后，位置 $4$ 仍然不可达，因此我们返回 `False`。

```Java [sol1-Java]
public class Solution {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        int rightmost = 0;
        for (int i = 0; i < n; ++i) {
            if (i <= rightmost) {
                rightmost = Math.max(rightmost, i + nums[i]);
                if (rightmost >= n - 1) {
                    return true;
                }
            }
        }
        return false;
    }
}
```
```C++ [sol1-C++]
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        int rightmost = 0;
        for (int i = 0; i < n; ++i) {
            if (i <= rightmost) {
                rightmost = max(rightmost, i + nums[i]);
                if (rightmost >= n - 1) {
                    return true;
                }
            }
        }
        return false;
    }
};
```
```Python [sol1-Python3]
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n, rightmost = len(nums), 0
        for i in range(n):
            if i <= rightmost:
                rightmost = max(rightmost, i + nums[i])
                if rightmost >= n - 1:
                    return True
        return False
```

**复杂度分析**

- 时间复杂度：$O(n)$，其中 $n$ 为数组的大小。只需要访问 `nums` 数组一遍，共 $n$ 个位置。
- 空间复杂度：$O(1)$，不需要额外的空间开销。

---

## 例 2：「力扣」第 45 题：跳跃游戏 II（困难）

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

**示例:**

```
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

**说明:**

假设你总是可以到达数组的最后一个位置。

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

#### 解题思路

这道题是典型的贪心算法，通过局部最优解得到全局最优解。以下两种方法都是使用贪心算法实现，只是贪心的策略不同。

#### 方法一：反向查找出发位置

我们的目标是到达数组的最后一个位置，因此我们可以考虑最后一步跳跃前所在的位置，该位置通过跳跃能够到达最后一个位置。

如果有多个位置通过跳跃都能够到达最后一个位置，那么我们应该如何进行选择呢？直观上来看，我们可以「贪心」地选择距离最后一个位置最远的那个位置，也就是对应下标最小的那个位置。因此，我们可以从左到右遍历数组，选择第一个满足要求的位置。

找到最后一步跳跃前所在的位置之后，我们继续贪心地寻找倒数第二步跳跃前所在的位置，以此类推，直到找到数组的开始位置。

使用这种方法编写的 `C++` 和 `Python` 代码会超出时间限制，因此我们只给出 `Java` 和 `Go` 代码。

```Java [sol1-Java]
class Solution {
    public int jump(int[] nums) {
        int position = nums.length - 1;
        int steps = 0;
        while (position > 0) {
            for (int i = 0; i < position; i++) {
                if (i + nums[i] >= position) {
                    position = i;
                    steps++;
                    break;
                }
            }
        }
        return steps;
    }
}
```

```golang [sol1-Golang]
func jump(nums []int) int {
    position := len(nums) - 1
    steps := 0
    for position > 0 {
        for i := 0; i < position; i++ {
            if i + nums[i] >= position {
                position = i
                steps++
                break
            }
        }
    }
    return steps
}
```

**复杂度分析**

* 时间复杂度：$O(n^2)$，其中 $n$ 是数组长度。有两层嵌套循环，在最坏的情况下，例如数组中的所有元素都是 $1$，`position` 需要遍历数组中的每个位置，对于 `position` 的每个值都有一次循环。

* 空间复杂度：$O(1)$。

#### 方法二：正向查找可到达的最大位置

方法一虽然直观，但是时间复杂度比较高，有没有办法降低时间复杂度呢？

如果我们「贪心」地进行正向查找，每次找到可到达的最远位置，就可以在线性时间内得到最少的跳跃次数。

例如，对于数组 `[2,3,1,2,4,2,3]`，初始位置是下标 0，从下标 0 出发，最远可到达下标 2。下标 0 可到达的位置中，下标 1 的值是 3，从下标 1 出发可以达到更远的位置，因此第一步到达下标 1。

从下标 1 出发，最远可到达下标 4。下标 1 可到达的位置中，下标 4 的值是 4 ，从下标 4 出发可以达到更远的位置，因此第二步到达下标 4。

![fig1](https://assets.leetcode-cn.com/solution-static/45/45_fig1.png)

在具体的实现中，我们维护当前能够到达的最大下标位置，记为边界。我们从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1。

在遍历数组时，我们不访问最后一个元素，这是因为在访问最后一个元素之前，我们的边界一定大于等于最后一个位置，否则就无法跳到最后一个位置了。如果访问最后一个元素，在边界正好为最后一个位置的情况下，我们会增加一次「不必要的跳跃次数」，因此我们不必访问最后一个元素。

```Java [sol2-Java]
class Solution {
    public int jump(int[] nums) {
        int length = nums.length;
        int end = 0;
        int maxPosition = 0; 
        int steps = 0;
        for (int i = 0; i < length - 1; i++) {
            maxPosition = Math.max(maxPosition, i + nums[i]); 
            if (i == end) {
                end = maxPosition;
                steps++;
            }
        }
        return steps;
    }
}
```

```C++ [sol2-C++]
class Solution {
public:
    int jump(vector<int>& nums) {
        int maxPos = 0, n = nums.size(), end = 0, step = 0;
        for (int i = 0; i < n - 1; ++i) {
            if (maxPos >= i) {
                maxPos = max(maxPos, i + nums[i]);
                if (i == end) {
                    end = maxPos;
                    ++step;
                }
            }
        }
        return step;
    }
};
```

```Python [sol2-Python3]
class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        maxPos, end, step = 0, 0, 0
        for i in range(n - 1):
            if maxPos >= i:
                maxPos = max(maxPos, i + nums[i])
                if i == end:
                    end = maxPos
                    step += 1
        return step
```

```golang [sol2-Golang]
func jump(nums []int) int {
    length := len(nums)
    end := 0
    maxPosition := 0
    steps := 0
    for i := 0; i < length - 1; i++ {
        maxPosition = max(maxPosition, i + nums[i])
        if i == end {
            end = maxPosition
            steps++
        }
    }
    return steps
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
```

**复杂度分析**

* 时间复杂度：$O(n)$，其中 $n$ 是数组长度。

* 空间复杂度：$O(1)$。


