# Portfolio Repository

## Instructions to Set Up Your Repo to Pull Changes from the Public Repo

### 1. Clone Your Forked Repository (If You Haven’t Already)

If you haven't cloned your forked repository yet, start by cloning it to your local machine. You can do this by running the following command:

```bash
git clone https://github.com/SultanaJon/http-client-portfolio.git
```

### 2. Add the Public Repository as a Remote

After cloning your fork, you need to add the public repository (the original repository) as an additional remote called upstream. This will allow you to pull changes from the public repository.

```bash
git remote add upstream https://github.com/original-owner/original-repository.git
```

### 3. Verify the Remotes

You can verify that both remotes (public for your fork and upstream for the public repo) have been correctly added by running:

```bash
git remote -v
```

You should see something like this:

```perl
public  https://github.com/your-username/your-repository.git (fetch)
public  https://github.com/your-username/your-repository.git (push)
upstream  https://github.com/original-owner/original-repository.git (fetch)
upstream  https://github.com/original-owner/original-repository.git (push)
```

### 4. Fetch the Latest Changes from the Public Repository

To get the latest changes from the public repository, fetch the updates using the following command:

```bash
git fetch upstream
```

This fetches the changes from the upstream repository but doesn’t merge them into your local branches yet.

### 5. Merge the Changes into Your Local Branch

After fetching, you can merge the changes from the public repository into your local main (or other branch) by running:

```bash
git checkout main
git merge upstream/main
```

This will merge the changes from the public main branch into your local main branch.

If you want to update another branch, just switch to it before merging:

```bash
git checkout your-branch
git merge upstream/main
```

### 6. Push the Changes to Your Fork (Optional)

If you want to update your fork on GitHub with the changes you just merged, you need to push them:

```bash
git push origin main
```

Replace main with the branch you're working on if it's different.

### 7. Keep Your Fork in Sync with the Public Repository

Whenever you want to update your fork with the latest changes from the public repository, you can repeat steps 4 and 5:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push public main
```

This will keep your fork up to date with the changes from the public repo.

## Fetching and Merging Changes

### 1. **Ensure You Are on the Correct Branch**

Before fetching any changes, ensure that you are on the branch where you want to apply the changes. For example, if you want to fetch changes to your `main` branch:

```bash
git checkout main
```

### 2. Fetch the Latest Changes from the Remote Repository

To fetch the latest changes from the remote repository without merging them immediately:

```bash
git fetch public
```

This command fetches updates from the remote repository but doesn’t merge them into your current branch. It will only update your local view of the repository.

### 3. Merge Changes into Your Local Branch

If you are ready to merge the changes into your local branch, use the git merge command:

```bash
git merge public/main
```

This will merge the changes from the remote main branch into your local main branch.

### 4. Push the Merged Changes to Your Remote Repository

Once the changes have been successfully merged into your local branch, you can push the updates back to your remote repository:

```bash
git push public main
```

## Cherry-Picking Changes

If you only want to apply specific commits from the remote repository (rather than merging all changes), you can use cherry-picking. This allows you to pick and apply individual commits to your local branch.

### 1. Find the Commit Hash You Want to Cherry-Pick

First, look for the commit(s) you want to apply. You can do this by viewing the commit history of the remote branch:

```bash
git log public/main
```

Note the commit hash (e.g., abc1234) of the specific commit you want to apply to your local branch.

### 2. Checkout the Branch You Want to Apply the Commit To

Ensure that you’re on the branch where you want to apply the commit. For example:

```bash
git checkout main
```

### 3. Cherry-Pick the Commit

Use the commit hash you found in step 1 to cherry-pick the changes:

```bash
git cherry-pick abc1234
```

This will apply the changes from that specific commit onto your current branch.

### 4. Resolve Conflicts (If Any)

If there are conflicts during the cherry-pick process, Git will pause and prompt you to resolve them. Once conflicts are resolved, continue the cherry-pick:

```bash
git cherry-pick --continue
```

### 5. Push the Cherry-Picked Changes

After successfully cherry-picking the changes and resolving any conflicts, push the changes to your remote repository:

```bash
git push public main
```

## Summary of Commands

Fetch changes from the remote:

```bash
git fetch public
```

Merge changes from the remote main branch into your local branch:

```bash
git merge public/main
```

Cherry-pick a specific commit:

```bash
git cherry-pick <commit-hash>
```

Push changes to your remote repository:

```bash
git push public main
```
