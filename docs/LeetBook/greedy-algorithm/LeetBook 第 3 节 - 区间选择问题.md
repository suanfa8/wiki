# 第 3 节：区间选择问题

有一类使用「贪心算法」解决的问题称为「活动选择问题」，解决这一类问题的直觉是「**优先选择活动最早的活动**」。我们下面给出的三道例题都给出了对这一类问题的直觉的证明。如果还想了解「活动选择问题」的详细讨论，可以查看《算法导论》第 16.1 节「活动选择问题」的叙述。

---

## 例 1：「力扣」第 435 题：无重叠区间（中等）

给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

**注意:**

1. 可以认为区间的终点总是大于它的起点。
2. 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

**示例 1:**

```
输入: [ [1,2], [2,3], [3,4], [1,3] ]

输出: 1

解释: 移除 [1,3] 后，剩下的区间没有重叠。
```

**示例 2:**

```
输入: [ [1,2], [1,2], [1,2] ]

输出: 2

解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
```

**示例 3:**

```
输入: [ [1,2], [2,3] ]

输出: 0

解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
```

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

#### 方法一：动态规划

**思路与算法**

题目的要求等价于「选出最多数量的区间，使得它们互不重叠」。由于选出的区间互不重叠，因此我们可以将它们按照端点从小到大的顺序进行排序，并且无论我们按照左端点还是右端点进行排序，得到的结果都是唯一的。

这样一来，我们可以先将所有的 $n$ 个区间按照左端点（或者右端点）从小到大进行排序，随后使用动态规划的方法求出区间数量的最大值。设排完序后这 $n$ 个区间的左右端点分别为 $l_0, \cdots, l_{n-1}$ 以及 $r_0, \cdots, r_{n-1}$，那么我们令 $f_i$ 表示「以区间 $i$ 为最后一个区间，可以选出的区间数量的最大值」，状态转移方程即为：

$$
f_i = \max_{j < i ~\wedge~ r_j \leq l_i} \{  f_j \} + 1
$$

即我们枚举倒数第二个区间的编号 $j$，满足 $j < i$，并且第 $j$ 个区间必须要与第 $i$ 个区间不重叠。由于我们已经按照左端点进行升序排序了，因此只要第 $j$ 个区间的右端点 $r_j$ 没有越过第 $i$ 个区间的左端点 $l_i$，即 $r_j \leq l_i$，那么第 $j$ 个区间就与第 $i$ 个区间不重叠。我们在所有满足要求的 $j$ 中，选择 $f_j$ 最大的那一个进行状态转移，如果找不到满足要求的区间，那么状态转移方程中 $\min$ 这一项就为 $0$，$f_i$ 就为 $1$。

最终的答案即为所有 $f_i$ 中的最大值。

**参考代码**

由于方法一的时间复杂度较高，因此在下面的 $\texttt{Python}$ 代码中，我们尽量使用列表推导优化常数，使得其可以在时间限制内通过所有测试数据。

```C++ [sol1-C++]
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.empty()) {
            return 0;
        }
        
        sort(intervals.begin(), intervals.end(), [](const auto& u, const auto& v) {
            return u[0] < v[0];
        });

        int n = intervals.size();
        vector<int> f(n, 1);
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (intervals[j][1] <= intervals[i][0]) {
                    f[i] = max(f[i], f[j] + 1);
                }
            }
        }
        return n - *max_element(f.begin(), f.end());
    }
};
```

```Java [sol1-Java]
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }
        
        Arrays.sort(intervals, new Comparator<int[]>() {
            public int compare(int[] interval1, int[] interval2) {
                return interval1[0] - interval2[0];
            }
        });

        int n = intervals.length;
        int[] f = new int[n];
        Arrays.fill(f, 1);
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (intervals[j][1] <= intervals[i][0]) {
                    f[i] = Math.max(f[i], f[j] + 1);
                }
            }
        }
        return n - Arrays.stream(f).max().getAsInt();
    }
}
```

```Python [sol1-Python3]
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        intervals.sort()
        n = len(intervals)
        f = [1]

        for i in range(1, n):
            f.append(max((f[j] for j in range(i) if intervals[j][1] <= intervals[i][0]), default=0) + 1)

        return n - max(f)
```

```go [sol1-Golang]
func eraseOverlapIntervals(intervals [][]int) int {
    n := len(intervals)
    if n == 0 {
        return 0
    }
    sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })
    dp := make([]int, n)
    for i := range dp {
        dp[i] = 1
    }
    for i := 1; i < n; i++ {
        for j := 0; j < i; j++ {
            if intervals[j][1] <= intervals[i][0] {
                dp[i] = max(dp[i], dp[j]+1)
            }
        }
    }
    return n - max(dp...)
}

func max(a ...int) int {
    res := a[0]
    for _, v := range a[1:] {
        if v > res {
            res = v
        }
    }
    return res
}
```

```C [sol1-C]
int cmp(int** a, int** b) {
    return (*a)[0] - (*b)[0];
}

int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    if (intervalsSize == 0) {
        return 0;
    }

    qsort(intervals, intervalsSize, sizeof(int*), cmp);
    int f[intervalsSize];
    for (int i = 0; i < intervalsSize; i++) {
        f[i] = 1;
    }
    int maxn = 1;
    for (int i = 1; i < intervalsSize; ++i) {
        for (int j = 0; j < i; ++j) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = fmax(f[i], f[j] + 1);
            }
        }
        maxn = fmax(maxn, f[i]);
    }
    return intervalsSize - maxn;
}
```

```JavaScript [sol1-JavaScript]
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const n = intervals.length;
    const f = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
    }
    return n - Math.max(...f);
};
```

**复杂度分析**

- 时间复杂度：$O(n^2)$，其中 $n$ 是区间的数量。我们需要 $O(n \log n)$ 的时间对所有的区间按照左端点进行升序排序，并且需要 $O(n^2)$ 的时间进行动态规划。由于前者在渐进意义下小于后者，因此总时间复杂度为 $O(n^2)$。

  注意到方法一本质上是一个「最长上升子序列」问题，因此我们可以将时间复杂度优化至 $O(n \log n)$，具体可以参考「[300. 最长递增子序列的官方题解](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/)」。

- 空间复杂度：$O(n)$，即为存储所有状态 $f_i$ 需要的空间。

#### 方法二：贪心

**思路与算法**

我们不妨想一想应该选择哪一个区间作为首个区间。

假设在某一种**最优**的选择方法中，$[l_k, r_k]$ 是首个（即最左侧的）区间，那么它的左侧没有其它区间，右侧有若干个不重叠的区间。设想一下，如果此时存在一个区间 $[l_j, r_j]$，使得 $r_j < r_k$，即区间 $j$ 的右端点在区间 $k$ 的左侧，那么我们将区间 $k$ 替换为区间 $j$，其与剩余右侧被选择的区间仍然是不重叠的。而当我们将区间 $k$ 替换为区间 $j$ 后，就得到了另一种**最优**的选择方法。

我们可以不断地寻找右端点在首个区间右端点左侧的新区间，将首个区间替换成该区间。那么当我们无法替换时，**首个区间就是所有可以选择的区间中右端点最小的那个区间**。因此我们将所有区间按照右端点从小到大进行排序，那么排完序之后的首个区间，就是我们选择的首个区间。

如果有多个区间的右端点都同样最小怎么办？由于我们选择的是首个区间，因此在左侧不会有其它的区间，那么左端点在何处是不重要的，我们只要任意选择一个右端点最小的区间即可。

当确定了首个区间之后，所有与首个区间不重合的区间就组成了一个规模更小的子问题。由于我们已经在初始时将所有区间按照右端点排好序了，因此对于这个子问题，我们无需再次进行排序，只要找出其中**与首个区间不重合**并且右端点最小的区间即可。用相同的方法，我们可以依次确定后续的所有区间。

在实际的代码编写中，我们对按照右端点排好序的区间进行遍历，并且实时维护上一个选择区间的右端点 $\textit{right}$。如果当前遍历到的区间 $[l_i, r_i]$ 与上一个区间不重合，即 $l_i \geq \textit{right}$，那么我们就可以贪心地选择这个区间，并将 $\textit{right}$ 更新为 $r_i$。

**参考代码**

```C++ [sol2-C++]
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.empty()) {
            return 0;
        }
        
        sort(intervals.begin(), intervals.end(), [](const auto& u, const auto& v) {
            return u[1] < v[1];
        });

        int n = intervals.size();
        int right = intervals[0][1];
        int ans = 1;
        for (int i = 1; i < n; ++i) {
            if (intervals[i][0] >= right) {
                ++ans;
                right = intervals[i][1];
            }
        }
        return n - ans;
    }
};
```

```Java [sol2-Java]
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }
        
        Arrays.sort(intervals, new Comparator<int[]>() {
            public int compare(int[] interval1, int[] interval2) {
                return interval1[1] - interval2[1];
            }
        });

        int n = intervals.length;
        int right = intervals[0][1];
        int ans = 1;
        for (int i = 1; i < n; ++i) {
            if (intervals[i][0] >= right) {
                ++ans;
                right = intervals[i][1];
            }
        }
        return n - ans;
    }
}
```

```Python [sol2-Python3]
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        intervals.sort(key=lambda x: x[1])
        n = len(intervals)
        right = intervals[0][1]
        ans = 1

        for i in range(1, n):
            if intervals[i][0] >= right:
                ans += 1
                right = intervals[i][1]
        
        return n - ans
```

```go [sol2-Golang]
func eraseOverlapIntervals(intervals [][]int) int {
    n := len(intervals)
    if n == 0 {
        return 0
    }
    sort.Slice(intervals, func(i, j int) bool { return intervals[i][1] < intervals[j][1] })
    ans, right := 1, intervals[0][1]
    for _, p := range intervals[1:] {
        if p[0] >= right {
            ans++
            right = p[1]
        }
    }
    return n - ans
}
```

```C [sol2-C]
int cmp(int** a, int** b) {
    return (*a)[1] - (*b)[1];
}

int eraseOverlapIntervals(int** intervals, int intervalsSize, int* intervalsColSize) {
    if (intervalsSize == 0) {
        return 0;
    }

    qsort(intervals, intervalsSize, sizeof(int*), cmp);

    int right = intervals[0][1];
    int ans = 1;
    for (int i = 1; i < intervalsSize; ++i) {
        if (intervals[i][0] >= right) {
            ++ans;
            right = intervals[i][1];
        }
    }
    return intervalsSize - ans;
}
```

```JavaScript [sol2-JavaScript]
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => a[1] - b[1]);

    const n = intervals.length;
    let right = intervals[0][1];
    let ans = 1;
    for (let i = 1; i < n; ++i) {
        if (intervals[i][0] >= right) {
            ++ans;
            right = intervals[i][1];
        }
    }
    return n - ans;
};
```

**复杂度分析**

- 时间复杂度：$O(n \log n)$，其中 $n$ 是区间的数量。我们需要 $O(n \log n)$ 的时间对所有的区间按照右端点进行升序排序，并且需要 $O(n)$ 的时间进行遍历。由于前者在渐进意义下大于后者，因此总时间复杂度为 $O(n \log n)$。

- 空间复杂度：$O(\log n)$，即为排序需要使用的栈空间。



---

## 例 2：「力扣」第 452 题：用最少数量的箭引爆气球（中等）

在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。

一支弓箭可以沿着 x 轴从不同点完全垂直地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 **`x``start`**，**`x``end`**，且满足  `xstart ≤ x ≤ x``end`，则该气球会被引爆。可以射出的弓箭的数量没有限制。弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。

给你一个数组 `points` ，其中 `points [i] = [xstart,xend]` ，返回引爆所有气球所必须射出的最小弓箭数。

**示例 1：**

```
输入:
[[10,16], [2,8], [1,6], [7,12]]

输出:
2

解释:
对于该样例，我们可以在x = 6（射爆[2,8],[1,6]两个气球）和 x = 11（射爆另外两个气球）。
```

**示例 2：**

```
输入：points = [[1,2],[3,4],[5,6],[7,8]]
输出：4
```

**示例 3：**

```
输入：points = [[1,2],[2,3],[3,4],[4,5]]
输出：2
```

**示例 4：**

```
输入：points = [[1,2]]
输出：1
```

**示例 5：**

```
输入：points = [[2,3],[2,3]]
输出：1
```

**提示：**

- `0 <= points.length <= 10^4`
- `points[i].length == 2`
- `-2^31 <= xstart < xend <= 2^31 - 1`

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

**思路与算法**

我们首先随机地射出一支箭，再看一看是否能够调整这支箭地射出位置，使得我们可以引爆更多数目的气球。

![fig1](https://assets.leetcode-cn.com/solution-static/452/1.png)

如图 1-1 所示，我们随机射出一支箭，引爆了除红色气球以外的所有气球。我们称所有引爆的气球为「原本引爆的气球」，其余的气球为「原本完好的气球」。可以发现，如果我们将这支箭的射出位置稍微往右移动一点，那么我们就有机会引爆红色气球，如图 1-2 所示。

那么我们最远可以将这支箭往右移动多远呢？我们唯一的要求就是：原本引爆的气球只要仍然被引爆就行了。这样一来，我们找出原本引爆的气球中右边界位置最靠左的那一个，将这支箭的射出位置移动到这个右边界位置，这也是最远可以往右移动到的位置：如图 1-3 所示，只要我们再往右移动一点点，这个气球就无法被引爆了。

> 为什么「原本引爆的气球仍然被引爆」是唯一的要求？别急，往下看就能看到其精妙所在。

因此，我们可以断定：

> 一定存在一种最优（射出的箭数最小）的方法，使得每一支箭的射出位置都恰好对应着某一个气球的右边界。

这是为什么？我们考虑任意一种最优的方法，对于其中的任意一支箭，我们都通过上面描述的方法，将这支箭的位置移动到它对应的「原本引爆的气球中最靠左的右边界位置」，那么这些原本引爆的气球仍然被引爆。这样一来，所有的气球仍然都会被引爆，并且每一支箭的射出位置都恰好位于某一个气球的右边界了。

有了这样一个有用的断定，我们就可以快速得到一种最优的方法了。考虑**所有**气球中右边界位置最靠左的那一个，那么一定有一支箭的射出位置就是它的右边界（否则就没有箭可以将其引爆了）。当我们确定了一支箭之后，我们就可以将这支箭引爆的所有气球移除，并从剩下未被引爆的气球中，再选择右边界位置最靠左的那一个，确定下一支箭，直到所有的气球都被引爆。

我们可以写出如下的伪代码：

```ts
let points := [[x(0), y(0)], [x(1), y(1)], ... [x(n-1), y(n-1)]]，表示 n 个气球
let burst := [false] * n，表示每个气球是否被引爆
let ans := 0，表示射出的箭数

将 points 按照 y 值（右边界）进行升序排序

while burst 中还有 false 值 do
    let i := 最小的满足 burst[i] = false 的索引 i
    for j := i to n-1 do
        if x(j) <= y(i) then
            burst[j] := true
        end if
    end for
end while

return ans
```

这样的做法在最坏情况下时间复杂度是 $O(n^2)$，即这 $n$ 个气球对应的区间互不重叠，$\texttt{while}$ 循环需要执行 $n$ 次。那么我们如何继续进行优化呢？

事实上，在内层的 $j$ 循环中，当我们遇到第一个不满足 $x(j) \leq y(i)$ 的 $j$ 值，就可以直接跳出循环，并且这个 $y(j)$ 就是下一支箭的射出位置。为什么这样做是对的呢？我们考虑某一支箭的索引 $i_t$ 以及它的下一支箭的索引 $j_t$，对于索引在 $j_t$ 之后的**任意**一个可以被 $i_t$ 引爆的气球，记索引为 $j_0$，有：

$$
x(j_0) \leq y(i_t)
$$

由于 $y(i_t) \leq y(j_t)$ 显然成立，那么

$$
x(j_0) \leq y(j_t)
$$

也成立，也就是说：当前这支箭在索引 $j_t$（第一个无法引爆的气球）之后所有可以引爆的气球，下一支箭也都可以引爆。因此我们就证明了其正确性，也就可以写出如下的伪代码：

```ts
let points := [[x(0), y(0)], [x(1), y(1)], ... [x(n-1), y(n-1)]]，表示 n 个气球
let pos := y(0)，表示当前箭的射出位置
let ans := 0，表示射出的箭数

将 points 按照 y 值（右边界）进行升序排序

for i := 1 to n-1 do
    if x(i) > pos then
        ans := ans + 1
        pos := y(i)
    end if
end for

return ans
```

这样就可以将计算答案的时间从 $O(n^2)$ 降低至 $O(n)$。

**参考代码**

```C++ [sol1-C++]
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& points) {
        if (points.empty()) {
            return 0;
        }
        sort(points.begin(), points.end(), [](const vector<int>& u, const vector<int>& v) {
            return u[1] < v[1];
        });
        int pos = points[0][1];
        int ans = 1;
        for (const vector<int>& balloon: points) {
            if (balloon[0] > pos) {
                pos = balloon[1];
                ++ans;
            }
        }
        return ans;
    }
};
```

```Java [sol1-Java]
class Solution {
    public int findMinArrowShots(int[][] points) {
        if (points.length == 0) {
            return 0;
        }
        Arrays.sort(points, new Comparator<int[]>() {
            public int compare(int[] point1, int[] point2) {
                if (point1[1] > point2[1]) {
                    return 1;
                } else if (point1[1] < point2[1]) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
        int pos = points[0][1];
        int ans = 1;
        for (int[] balloon: points) {
            if (balloon[0] > pos) {
                pos = balloon[1];
                ++ans;
            }
        }
        return ans;
    }
}
```

```Python [sol1-Python3]
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        
        points.sort(key=lambda balloon: balloon[1])
        pos = points[0][1]
        ans = 1
        for balloon in points:
            if balloon[0] > pos:
                pos = balloon[1]
                ans += 1
        
        return ans
```

```JavaScript [sol1-JavaScript]
var findMinArrowShots = function(points) {
    if (!points.length ) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    let pos = points[0][1]
    let ans = 1;
    for (let balloon of points) {
        if (balloon[0] > pos) {
            pos = balloon[1];
            ans++;
        }
    }
    return ans;
};
```

```Golang [sol1-Golang]
func findMinArrowShots(points [][]int) int {
    if len(points) == 0 {
        return 0
    }
    sort.Slice(points, func(i, j int) bool { return points[i][1] < points[j][1] })
    maxRight := points[0][1]
    ans := 1
    for _, p := range points {
        if p[0] > maxRight {
            maxRight = p[1]
            ans++
        }
    }
    return ans
}
```

```C [sol1-C]
int cmp(void* _a, void* _b) {
    int *a = *(int**)_a, *b = *(int**)_b;
    return a[1] < b[1] ? -1 : 1;
}

int findMinArrowShots(int** points, int pointsSize, int* pointsColSize) {
    if (!pointsSize) {
        return 0;
    }
    qsort(points, pointsSize, sizeof(int*), cmp);
    int pos = points[0][1];
    int ans = 1;
    for (int i = 0; i < pointsSize; ++i) {
        if (points[i][0] > pos) {
            pos = points[i][1];
            ++ans;
        }
    }
    return ans;
}
```

**复杂度分析**

- 时间复杂度：$O(n\log n)$，其中 $n$ 是数组 $\textit{points}$ 的长度。排序的时间复杂度为 $O(n \log n)$，对所有气球进行遍历并计算答案的时间复杂度为 $O(n)$，其在渐进意义下小于前者，因此可以忽略。

- 空间复杂度：$O(\log n)$，即为排序需要使用的栈空间。

#### 结语

这道题的标记包含「贪心」，但本篇题解正文全文没有使用「贪心」二字，那么「贪心」的思想到底体现在哪里呢？欢迎读者评论区留言说出想法。

---

## 例 3：「力扣」第 56 题：合并区间

以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]`。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

**示例 1：**

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2：**

```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

**提示：**

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= start_i <= end_i <= 10^4`

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

如果我们按照区间的左端点排序，那么在排完序的列表中，可以合并的区间一定是连续的。如下图所示，标记为蓝色、黄色和绿色的区间分别可以合并成一个大区间，它们在排完序的列表中是连续的：

![56-2.png](https://pic.leetcode-cn.com/50417462969bd13230276c0847726c0909873d22135775ef4022e806475d763e-56-2.png)
{:align="center"}

**算法**

我们用数组 `merged` 存储最终的答案。

首先，我们将列表中的区间按照左端点升序排序。然后我们将第一个区间加入 `merged` 数组中，并按顺序依次考虑之后的每个区间：

- 如果当前区间的左端点在数组 `merged` 中最后一个区间的右端点之后，那么它们不会重合，我们可以直接将这个区间加入数组 `merged` 的末尾；

- 否则，它们重合，我们需要用当前区间的右端点更新数组 `merged` 中最后一个区间的右端点，将其置为二者的较大值。

**正确性证明**

上述算法的正确性可以用反证法来证明：在排完序后的数组中，两个本应合并的区间没能被合并，那么说明存在这样的三元组 $(i, j, k)$ 以及数组中的三个区间 $a[i], a[j], a[k]$ 满足 $i < j < k$ 并且 $(a[i], a[k])$ 可以合并，但 $(a[i], a[j])$ 和 $(a[j], a[k])$ 不能合并。这说明它们满足下面的不等式：

$$
a[i].end < a[j].start \quad (a[i] \text{ 和 } a[j] \text{ 不能合并}) \\
a[j].end < a[k].start \quad (a[j] \text{ 和 } a[k] \text{ 不能合并}) \\
a[i].end \geq a[k].start \quad (a[i] \text{ 和 } a[k] \text{ 可以合并}) \\
$$

我们联立这些不等式（注意还有一个显然的不等式 $a[j].start \leq a[j].end$），可以得到：

$$
a[i].end < a[j].start \leq a[j].end < a[k].start
$$

产生了矛盾！这说明假设是不成立的。因此，所有能够合并的区间都必然是连续的。

**参考代码**

```Python [sol1-Python3]
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: x[0])

        merged = []
        for interval in intervals:
            # 如果列表为空，或者当前区间与上一区间不重合，直接添加
            if not merged or merged[-1][1] < interval[0]:
                merged.append(interval)
            else:
                # 否则的话，我们就可以与上一区间进行合并
                merged[-1][1] = max(merged[-1][1], interval[1])

        return merged
```

```C++ [sol1-C++]
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.size() == 0) {
            return {};
        }
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        for (int i = 0; i < intervals.size(); ++i) {
            int L = intervals[i][0], R = intervals[i][1];
            if (!merged.size() || merged.back()[1] < L) {
                merged.push_back({L, R});
            }
            else {
                merged.back()[1] = max(merged.back()[1], R);
            }
        }
        return merged;
    }
};
```

```Java [sol1-Java]
class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length == 0) {
            return new int[0][2];
        }
        Arrays.sort(intervals, new Comparator<int[]>() {
            public int compare(int[] interval1, int[] interval2) {
                return interval1[0] - interval2[0];
            }
        });
        List<int[]> merged = new ArrayList<int[]>();
        for (int i = 0; i < intervals.length; ++i) {
            int L = intervals[i][0], R = intervals[i][1];
            if (merged.size() == 0 || merged.get(merged.size() - 1)[1] < L) {
                merged.add(new int[]{L, R});
            } else {
                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], R);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}
```

**复杂度分析**

- 时间复杂度：$O(n\log n)$，其中 $n$ 为区间的数量。除去排序的开销，我们只需要一次线性扫描，所以主要的时间开销是排序的 $O(n\log n)$。

- 空间复杂度：$O(\log n)$，其中 $n$ 为区间的数量。这里计算的是存储答案之外，使用的额外空间。$O(\log n)$ 即为排序所需要的空间复杂度。

