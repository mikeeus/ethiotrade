require 'test_helper'

class CountriesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @import = imports(:one)
  end
  
  # test "the truth" do
  #   assert true
  # end

  test "should get tables" do
    get country_tables_url(
      @import.country_origin, 'Import', @import.year), as: :json
    assert_response :success
  end
end
