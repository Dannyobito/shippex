import { APP_CONSTANTS } from "../constants";

interface HeaderProps {
  showGitHubLink?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showGitHubLink = true }) => {
  return (
    <header className="w-full flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold text-gray-800">
          {APP_CONSTANTS.APP_NAME}
        </h1>
      </div>

      {showGitHubLink && (
        <a
          href={APP_CONSTANTS.GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-blue-700 font-medium underline"
        >
          README
        </a>
      )}
    </header>
  );
};

export { Header };

