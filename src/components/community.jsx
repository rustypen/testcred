import { FaGithub, FaDiscord, FaMediumM, FaTwitter } from 'react-icons/fa';

function Community() {
  return (
    <div className="text-center container p-3 mx-auto mb-20">
      <div className="flex flex-col items-center bg-[#29564B] text-white rounded-xl py-20 px-3">
        <h3 className="text-4xl font-semibold mb-10">Join Our Community</h3>
        <div className="flex gap-10 justify-center">
          <a
            className="p-3 rounded-lg text-3xl"
            href="https://twitter.com/CredoreXYZ"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="p-3 rounded-lg text-3xl"
            href="https://github.com/credorelabs"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="p-3 rounded-lg text-3xl"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaMediumM />
          </a>
          <a
            className="p-3 rounded-lg text-3xl"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Community;
