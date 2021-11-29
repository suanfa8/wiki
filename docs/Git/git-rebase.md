这篇笔记根据这篇文章理解，很好的文章，所以写了 3 遍：

[https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase%E7%9A%84%E9%80%89%E6%8B%A9](https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-代码合并：Merge、Rebase的选择)

[https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase%E7%9A%84%E9%80%89%E6%8B%A9](https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-代码合并：Merge、Rebase的选择)

[https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase%E7%9A%84%E9%80%89%E6%8B%A9](https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-代码合并：Merge、Rebase的选择)



最难理解的部分：

基于谁去变基？

1、如果你在 develop （自己的分支）上，合并 master 变基，是完全可以的；

这是最佳实践，永远坚持这一条原则，将你的 commit 移动到 master 的后面，而不要将 master 移动到你的分支的后面。

如果这条最佳实践能做好，发起 pull request 的时候，项目的维护者只要快进就可以了，这样就可以保证你的提交有一个非常好看的历史。

默认情况下，git pull 命令会执行一次 merge，但你可以传入 `--rebase` 来强制它通过 `rebase` 来整合远程分支。

![96AEAD46-1BE6-48B0-B793-F8930DD28AD4](https://tva1.sinaimg.cn/large/008i3skNgy1gwej5tc5l2j312y0mmt9j.jpg)

2、**如果你在 master 上，变基去合并 develop ，是禁止的，是非常危险的**。

![EE07417C-BDFB-4A50-A398-1FB7CCFD367A](https://tva1.sinaimg.cn/large/008i3skNgy1gwej68ogabj313g0lit9y.jpg)

![25113600-19BD-4DAB-8EFF-47D591463E50](https://tva1.sinaimg.cn/large/008i3skNgy1gwej705wt3j317k06sq45.jpg)

3、在 pull request 之后不能变基

> 来自其他开发者的任何更改都应该用 git merge 而不是 git rebase 来并入。
>
> 来自其他开发者的任何更改都应该用 git merge 而不是 git rebase 来并入。
>
> 来自其他开发者的任何更改都应该用 git merge 而不是 git rebase 来并入。

如果你的变基操作很好的快，项目维护者的 git merge 就是一个快进，不会给别人造成去合并解决冲突的风险，这种感觉就好像，你马上下载了代码，马上就修改好了一样。

![DC543548-963F-413F-9F65-919898909680](https://tva1.sinaimg.cn/large/008i3skNgy1gwej7v8aurj315o0eoacp.jpg)

理解下面的场景的时候，假设我们在 feature 上一直工作，而 master 也一直在前进，这是因为团队其它人会一直往 master 上贡献代码。



+ 最开始的时候

![EF1ADE2E-DD78-4BE0-8653-A5DB93BC82BA](https://tva1.sinaimg.cn/large/008i3skNgy1gwej8eci4oj30vo0ki3z7.jpg)

git merge

![FA8DBE2F-5F03-476E-8AEF-D7386B1F61B9](https://tva1.sinaimg.cn/large/008i3skNgy1gwej8qagcoj30ys0l63ze.jpg)

git merge 会引入不必要的合并提交。

git rebase

![179D6784-DA39-4988-8E45-FE57C50C586E](https://tva1.sinaimg.cn/large/008i3skNgy1gwej9ioafkj315a0ledgp.jpg)

rebase 最大的好处是你的项目历史会非常整洁。

首先，**它不像 git merge 那样引入不必要的合并提交**。

其次，如上图所示，rebase 导致最后的项目历史呈现出完美的线性：你可以从项目终点到起点浏览而不需要任何的 fork。

这让你更容易使用 git log 、git bisect 和 gitk 来查看项目历史。

不过，这种简单的提交历史会带来两个后果：安全性和可跟踪性。

如果你违反了 rebase 黄金法则，重写项目历史可能会给你的协作工作流带来灾难性的影响。

此外，rebase 不会有合并提交中附带的信息：你看不到 feature 分支中并入了上游的哪些更改。





下面介绍如何使用交互的方式来做 rebase。

git checkout feature

git rebase -i master

它会打开一个文本编辑器，显示所有将被移动的提交：

pick 33d5b7a Message for commit #1

pick 9480b3d Message for commit #2

pick 5c67e61 Message for commit #3

这个列表定义了rebase将被执行后分支会是什么样的。更改pick 命令或者重新排序，这个分支的历史就能如你所愿了。比如说，如果第二个提交修复了第一个提交中的小问题，你可以用fixup 命令把它们合到一个提交中：

pick 33d5b7a Message for commit #1

fixup 9480b3d Message for commit #2

pick 5c67e61 Message for commit #3

保存后关闭文件，Git 会根据你的指令来执行 rebase ，项目历史看上去会是这样：

![8AE416A4-9CEF-41A3-BD19-8A1472C029E0](https://tva1.sinaimg.cn/large/008i3skNgy1gwejawzteoj314c0se76c.jpg)

rebase 的黄金法则（非常重要，团队中禁止使用 rebase 操作）

当你理解 rebase 是什么的时候，最重要的就是什么时候不能用 rebase。git rebase 的黄金法则便是，**绝不要在公共的分支上使用它**。

那么我们什么时候使用 git rebase 呢？

1、本地清理

清理本地不太合理、冗余的提交

2、合并上游的分支（将上游分支的更改合并到当前分支），前提：确保还没有推送本地的分支。

这一条和我们之前说的：在开发的过程中要经常地去合并上游分支的代码是一样的。

注意：这个时候的变基操作改变的是我们本地的代码，不会影响到 rebase 的黄金法则。