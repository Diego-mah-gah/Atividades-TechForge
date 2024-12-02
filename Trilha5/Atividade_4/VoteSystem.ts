abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
  
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    private votes: { [candidate: string]: number } = {};
  
    voteFor(candidate: string): void {
      if (!this.votes[candidate]) {
        this.votes[candidate] = 0;
      }
      this.votes[candidate]++;
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    private votes: { [candidate: string]: number } = {};
  
    voteFor(candidate: string): void {
      if (!this.votes[candidate]) {
        this.votes[candidate] = 0;
      }
      this.votes[candidate]++;
    }

    getResults(): object {
      const sortedCandidates = Object.entries(this.votes)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
  
      return sortedCandidates;
    }
  }
  
  const election = new Election();
  election.voteFor("Alice");
  election.voteFor("Bob");
  election.voteFor("Alice");
  election.voteFor("Carlos");
  election.voteFor("David");
  election.voteFor("Alice");
  election.voteFor("Eve");
  
  console.log("Resultados da Election:", election.getResults());
  
  const poll = new Poll();
  poll.voteFor("Carlos");
  poll.voteFor("Ana");
  poll.voteFor("Carlos");
  poll.voteFor("Carlos");
  poll.voteFor("Ana");
  poll.voteFor("David");
  poll.voteFor("David");
  poll.voteFor("David");
  
  console.log("Resultados da Poll:", poll.getResults());
  