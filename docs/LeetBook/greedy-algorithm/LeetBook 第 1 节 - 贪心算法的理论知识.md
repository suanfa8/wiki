# 第 1 节 贪心算法的理论知识

## 贪心算法的应用场景

解决一个问题需要多个步骤，每一个步骤有多种选择。可以使用贪心算法解决的问题，每一步只需要解决一个子问题，只做出一种选择，就可以完成任务。

---

## 贪心算法与回溯算法、动态规划的区别

「解决一个问题需要多个步骤，每一个步骤有多种选择」这样的描述我们在「回溯算法」「动态规划」算法中都会看到。它们的区别如下：

+ 「回溯算法」需要记录每一个步骤、每一个选择，用于回答所有具体解的问题；
+ 「动态规划」需要记录的是每一个步骤、所有选择的汇总值（最大、最小或者计数）；
+ 「贪心算法」由于适用的问题，每一个步骤只有一种选择，一般而言只需要记录与当前步骤相关的变量的值。

对于不同的求解目标和不同的问题场景，需要使用不同的算法。动态规划与贪心算法的区别，我们画在下面这张图里。

<![image.png](https://pic.leetcode-cn.com/1616382827-SnVzqr-image.png),![image.png](https://pic.leetcode-cn.com/1616382838-jRqPgN-image.png)>

---

## 可以使用「贪心算法」的问题需要满足的条件

+ 最优子结构：规模较大的问题的解由规模较小的子问题的解组成，区别于「动态规划」，可以使用「贪心算法」的问题「规模较大的问题的解」只由其中一个「规模较小的子问题的解」决定；
+ 无后效性：后面阶段的求解不会修改前面阶段已经计算好的结果；
+ 贪心选择性质：从局部最优解可以得到全局最优解。

对「最优子结构」和「无后效性」的理解同「动态规划」，「贪心选择性质」是「贪心算法」最需要关注的内容。

---

## 通过具体例子理解「贪心算法」

### 例：「力扣」第 455 题：分发饼干（简单）

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 `i`，都有一个胃口值 `g[i]`，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 `j`，都有一个尺寸 `s[j]` 。如果 `s[j] >= g[i]`，我们可以将这个饼干 `j` 分配给孩子 `i` ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

**示例 1:**

```
输入: g = [1,2,3], s = [1,1]
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
```

**示例 2:**

```
输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
```

**提示：**

- `1 <= g.length <= 3 * 104`
- `0 <= s.length <= 3 * 104`
- `1 <= g[i], s[j] <= 2^31 - 1`

（说明：本题解来自官方题解，审核老师在审核的时候可以跳过，上传的老师在上传文件的时候需要删除当前这一行。）

为了尽可能满足最多数量的孩子，从贪心的角度考虑，应该按照孩子的胃口从小到大的顺序依次满足每个孩子，且对于每个孩子，应该选择可以满足这个孩子的胃口且尺寸最小的饼干。证明如下。

假设有 $m$ 个孩子，胃口值分别是 $g_1$ 到 $g_m$，有 $n$ 块饼干，尺寸分别是 $s_1$ 到 $s_n$，满足 $g_i \le g_{i+1}$ 和 $s_j \le s_{j+1}$，其中 $1 \le i < m$，$1 \le j < n$。

假设在对前 $i-1$ 个孩子分配饼干之后，可以满足第 $i$ 个孩子的胃口的最小的饼干是第 $j$ 块饼干，即 $s_j$ 是剩下的饼干中满足 $g_i \le s_j$ 的最小值，最优解是将第 $j$ 块饼干分配给第 $i$ 个孩子。如果不这样分配，考虑如下两种情形：

- 如果 $i<m$ 且 $g_{i+1} \le s_j$ 也成立，则如果将第 $j$ 块饼干分配给第 $i+1$ 个孩子，且还有剩余的饼干，则可以将第 $j+1$ 块饼干分配给第 $i$ 个孩子，分配的结果不会让更多的孩子被满足；

- 如果 $j<n$，则如果将第 $j+1$ 块饼干分配给第 $i$ 个孩子，当 $g_{i+1} \le s_j$ 时，可以将第 $j$ 块饼干分配给第 $i+1$ 个孩子，分配的结果不会让更多的孩子被满足；当 $g_{i+1}>s_j$ 时，第 $j$ 块饼干无法分配给任何孩子，因此剩下的可用的饼干少了一块，因此分配的结果不会让更多的孩子被满足，甚至可能因为少了一块可用的饼干而导致更少的孩子被满足。

基于上述分析，可以使用贪心的方法尽可能满足最多数量的孩子。

首先对数组 $g$ 和 $s$ 排序，然后从小到大遍历 $g$ 中的每个元素，对于每个元素找到能满足该元素的 $s$ 中的最小的元素。具体而言，令 $i$ 是 $g$ 的下标，$j$ 是 $s$ 的下标，初始时 $i$ 和 $j$ 都为 $0$，进行如下操作。

对于每个元素 $g[i]$，找到**未被使用的**最小的 $j$ 使得 $g[i] \le s[j]$，则 $s[j]$ 可以满足 $g[i]$。由于 $g$ 和 $s$ 已经排好序，因此整个过程只需要对数组 $g$ 和 $s$ 各遍历一次。当两个数组之一遍历结束时，说明所有的孩子都被分配到了饼干，或者所有的饼干都已经被分配或被尝试分配（可能有些饼干无法分配给任何孩子），此时被分配到饼干的孩子数量即为可以满足的最多数量。

**参考代码**

```Java [sol1-Java]
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int numOfChildren = g.length, numOfCookies = s.length;
        int count = 0;
        for (int i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
            while (j < numOfCookies && g[i] > s[j]) {
                j++;
            }
            if (j < numOfCookies) {
                count++;
            }
        }
        return count;
    }
}
```

```JavaScript [sol1-JavaScript]
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const numOfChildren = g.length, numOfCookies = s.length;
    let count = 0;
    for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
};
```

```C++ [sol1-C++]
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        sort(g.begin(), g.end());
        sort(s.begin(), s.end());
        int numOfChildren = g.size(), numOfCookies = s.size();
        int count = 0;
        for (int i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
            while (j < numOfCookies && g[i] > s[j]) {
                j++;
            }
            if (j < numOfCookies) {
                count++;
            }
        }
        return count;
    }
};
```

```Go [sol1-Golang]
func findContentChildren(greed, size []int) (ans int) {
    sort.Ints(greed)
    sort.Ints(size)
    n, m := len(greed), len(size)
    for i, j := 0, 0; i < n && j < m; i++ {
        for j < m && greed[i] > size[j] {
            j++
        }
        if j < m {
            ans++
            j++
        }
    }
    return
}
```

```Python [sol1-Python3]
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        n, m = len(g), len(s)
        i = j = count = 0

        while i < n and j < m:
            while j < m and g[i] > s[j]:
                j += 1
            if j < m:
                count += 1
            i += 1
            j += 1
        
        return count
```

```C [sol1-C]
int cmp(int* a, int* b) {
    return *a - *b;
}

int findContentChildren(int* g, int gSize, int* s, int sSize) {
    qsort(g, gSize, sizeof(int), cmp);
    qsort(s, sSize, sizeof(int), cmp);
    int numOfChildren = gSize, numOfCookies = sSize;
    int count = 0;
    for (int i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
        while (j < numOfCookies && g[i] > s[j]) {
            j++;
        }
        if (j < numOfCookies) {
            count++;
        }
    }
    return count;
}
```

**复杂度分析**

- 时间复杂度：$O(m \log m + n \log n)$，其中 $m$ 和 $n$ 分别是数组 $g$ 和 $s$ 的长度。对两个数组排序的时间复杂度是 $O(m \log m + n \log n)$，遍历数组的时间复杂度是 $O(m+n)$，因此总时间复杂度是 $O(m \log m + n \log n)$。

- 空间复杂度：$O(\log m + \log n)$，其中 $m$ 和 $n$ 分别是数组 $g$ 和 $s$ 的长度。空间复杂度主要是排序的额外空间开销。


---

## 总结

+ 「贪心算法」总是做出在当前看来最好的选择就可以完成任务；
+ 解决「贪心算法」几乎没有套路，到底如何贪心，贪什么与我们要解决的问题密切相关。因此刚开始学习「贪心算法」的时候需要学习和模仿，然后才有直觉，猜测一个问题可能需要使用「贪心算法」，进而尝试证明，学会证明。




